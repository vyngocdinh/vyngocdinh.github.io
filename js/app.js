async function load(){
  try{
    const res = await fetch('data.json?_=' + Date.now());
    const data = await res.json();
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('intro').textContent = data.intro;
    const list = document.getElementById('list');
    list.innerHTML = '';
    data.items.forEach(it=>{
      const li = document.createElement('li');
      li.textContent = it;
      list.appendChild(li);
    });
    document.getElementById('extras').textContent = data.extras;
  }catch(e){
    console.error(e);
    document.getElementById('intro').textContent = 'Lỗi tải dữ liệu.';
  }
}
load();
