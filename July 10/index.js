var Name=document.getElementById('nam')
var Mail=document.getElementById('mail')
var City=document.getElementById('city')
var site=document.getElementById('web')
var btn=document.querySelector('button')

const getData= async()=>{
    const url='https://jsonplaceholder.typicode.com/users'
    const response=await fetch(url)
    console.log(response);
    const data= await response.json()
    console.log(data);
    printData(data)
}

const printData=(data)=>{
    console.log(`${data[0]['name']}`);
    Name.innerHTML=`${data[0]['name']}`
    Mail.innerHTML=`${data[0]['email']}`
    City.innerHTML=`${data[0]['address']['city']}`
    site.innerHTML=`${data[0]['website']}`
}

btn.addEventListener('click',function(){
    getData()
})