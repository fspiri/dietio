from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail, EmailMessage
from django.shortcuts import render, redirect
# Create your views here.
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.exceptions import ValidationError
from django.core.validators import validate_email

from dietio import settings
from .tokens import generate_token

user = None


def home(request):
    return render(request, "authentication/html/landing.html")


def signup(request):
    if request.method == 'POST':
        username = request.POST['user']
        email = request.POST['email']
        password1 = request.POST['pass1']
        password2 = request.POST['pass2']

        if User.objects.filter(username=username):
            messages.error(request, "User already exists")
            return redirect('home')

        if User.objects.filter(email=email):
            messages.error(request, "Email already registered")
            return redirect('home')

        if len(username) > 15:
            messages.error(request, "Username must be under 15 characters")

        if password1 != password2:
            messages.error(request, "Passwords must match")

        if not username.isalnum():
            messages.error(request, "Username must be alphanumeric")
            return redirect('home')

        myuser = User.objects.create_user(username, email, password1)
        # this is going to be useful once i can introduce a realiable way to send confirmation emails
        # myuser.is_active = False

        myuser.save()

        messages.success(request, "A confirmation email has been sent to your email address")

        subject = "welcome to dietio"
        body = "Hello" + myuser.username + "\nWelcome to dietio\nA confirmation email has been sent to you, please confirm your email address in order to validate your account\n" \
                                           "Thank you\nDietio staff"
        sender = settings.EMAIL_HOST_USER
        to_list = [myuser.email]

        send_mail(subject, body, sender, to_list, fail_silently=True)

        # email address confirmation email
        current_site = get_current_site(request)
        email_subject = "confirm your dietio email"
        email_message = render_to_string('authentication/html/email_confirmation.html', {
            'name': myuser.username,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(myuser.pk)),
            'token': generate_token.make_token(myuser)
        })

        email = EmailMessage(
            email_subject,
            email_message,
            settings.EMAIL_HOST_USER,
            [myuser.email]
        )
        email.fail_silenty = True
        email.send()
        return redirect("signin")

    return render(request, "authentication/html/register.html")


def signin(request):
    if request.method == 'POST':
        global user
        user = request.POST.get('user')
        password = request.POST.get('password')

        # messages.success(request, user)
        # messages.success(request, password)

        user = authenticate(username=user, password=password)

        if user is not None:
            login(request, user)
            return render(request, "main/main.html")

        else:
            messages.error(request, "wrong credentials")
            return redirect('home')

    return render(request, "authentication/html/landing.html")


def signout(request):
    logout(request)
    messages.success(request, "Logged out successfully")
    return redirect('home')


def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        myuser = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        myuser = None

    if myuser is not None and generate_token.check_token(myuser, token):
        myuser.is_active = True
        myuser.save()
        login(request, myuser)
        return redirect('home')
    else:
        return render(request, 'authentication/html/activation_failed.html')


def get_user_name():
    return user
