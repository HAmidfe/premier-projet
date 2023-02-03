
const project=document.getElementById("project");

for(let i=0;i<5;i++){
document.write("<h1> hello world" +i+"</h1>" );
document.write("<input type='text'></input>");
}
const names=['nour','ahmed','anis','mohamed'];
for(i=0;i<=3;i++){
document.write(names[i]+"</br>")
}
const users {
    firstname:'abdo',
    lastname:'fekih',
};
for(user in users){
    document.write(users[user]);
}
