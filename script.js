let cart = 0;
const players = [
  {name:"Musa Abdullahi",pos:"GK",num:1,img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"},
  {name:"Ibrahim Kano",pos:"DF",num:4,img:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400"},
  {name:"Yusuf Bello",pos:"MF",num:8,img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"},
  {name:"Ahmed Sani",pos:"FW",num:9,img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"},
  {name:"Kabiru Musa",pos:"DF",num:2,img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"},
  {name:"Suleiman Ali",pos:"MF",num:10,img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400"},
  {name:"Danladi Umar",pos:"FW",num:11,img:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400"},
  {name:"Nasir Adamu",pos:"GK",num:12,img:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400"},
];
function renderSquad(filter='all'){
  const list = document.getElementById('squadList');
  list.innerHTML = players.filter(p=>filter==='all'||p.pos===filter).map(p=>`
    <div class="player"><img src="${p.img}"><br><b>${p.name}</b><br>#${p.num} • ${p.pos}<br><button class="btn" style="margin-top:8px" onclick="showToast('You sponsored ${p.name} - ₦50,000')">Sponsor Player ₦50k</button></div>
  `).join('');
}
function filterSquad(f,el){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active'); renderSquad(f);
}
function addToCart(item){
  cart++; document.getElementById('cartCount').innerText = cart;
  showToast(item + ' added to cart! Total: ' + cart);
}
function buyTicket(type){ showToast(type + ' ticket selected - Fill form below'); document.getElementById('tickets').scrollIntoView({behavior:'smooth'}); }
function showToast(msg){
  const t=document.getElementById('toast'); t.innerText=msg; t.style.display='block';
  setTimeout(()=>t.style.display='none',3000);
}
function submitTicket(e){
  e.preventDefault();
  const name=document.getElementById('ticketName').value;
  const type=document.getElementById('ticketType').value;
  const phone=document.getElementById('ticketPhone').value;
  const msg=`Hello Kano Lions! I want to book ${type}. Name: ${name}, Phone: ${phone}`;
  window.open('https://wa.me/2348000000000?text='+encodeURIComponent(msg),'_blank');
  showToast('Opening WhatsApp for ticket booking...');
}
function joinMember(){
  const msg='Hello Kano Lions! I want to join Lions Pride Membership (₦10,000/year)';
  window.open('https://wa.me/2348000000000?text='+encodeURIComponent(msg),'_blank');
}
function submitSponsor(e){
  e.preventDefault();
  const biz=document.getElementById('bizName').value;
  const pack=document.getElementById('package').value;
  const msg=`Hello Kano Lions! ${biz} is interested in ${pack} sponsorship.`;
  window.open('https://wa.me/2348000000000?text='+encodeURIComponent(msg),'_blank');
  showToast('Sponsorship request sent!');
}
function updateCountdown(){
  const target=new Date('2026-11-23T16:30:00+01:00').getTime();
  const now=new Date().getTime(); const d=target-now;
  if(d<0){document.getElementById('countdown').innerText='MATCHDAY IS HERE!'; return;}
  const days=Math.floor(d/(1000*60*60*24));
  const hrs=Math.floor((d%(1000*60*60*24))/(1000*60*60));
  document.getElementById('countdown').innerText=`Next Match in ${days}d : ${hrs}h • Kano Lions vs Katsina United`;
}
renderSquad(); updateCountdown(); setInterval(updateCountdown,60000);