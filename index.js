function passwordChecker()
{
    let password=document.getElementById('new-password').value;
    let reEnterPassword=document.getElementById('re-enter-password').value;
    let main=document.getElementById('main-page');
    let changesPage=document.getElementById('changes-page')
    console.log(password,reEnterPassword)

    let msg=document.getElementById('msg');
    if(password.length != 0)
    {
        if(password != reEnterPassword)
        {
            msg.textContent="Passwords do not Match"
        }
        if(password.length > 8)
        {
            msg.textContent= "Password length is less than 8"
        }
        if(!isNaN(password))
        {
            msg.textContent= "Password can contains only aplhabat";
        }
        else
        {
            main.style.display='none';
            main.style.height = '78vh';
            changesPage.style.display='flex'
        }
    }
}
let reset=document.getElementById('reset');
reset.addEventListener('click',passwordChecker)