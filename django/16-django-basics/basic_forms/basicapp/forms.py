from django import forms


class FormName(forms.Form):
    """Form for login/register with name,email,text."""

    name = forms.CharField()
    email = forms.EmailField()
    text = forms.CharField(widget=forms.Textarea)
