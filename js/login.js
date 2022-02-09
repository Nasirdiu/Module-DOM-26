document.getElementById('login-submit').addEventListener('click',function(){
    // console.log('button click');
    const userField=document.getElementById('user-email');
    const userEmail=userField.value;
    // console.log(userEmail);

    //get pass
    const passField=document.getElementById('user-pass');
    const userPass=passField.value;
    // console.log(userPass);
    // cheek email & password
    if(userEmail=='nasir@gmail.com' && userPass=='nasir'){

        window.location.href='banking.html';
    }
    // console.log('valid user');
    //link up page to page
   else{
       alert('Please Enter your valid user name password ')
   }
})

