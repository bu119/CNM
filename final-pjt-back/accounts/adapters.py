from allauth.account.adapter import DefaultAccountAdapter

class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data
        user = super().save_user(request, user, form, False)

        interested_genre = data.get("interested_genre")
        if interested_genre:
            user.interested_genre = interested_genre

        user.save()
        return user
