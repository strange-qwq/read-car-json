// 从页面中读取车辆品牌和型号的JSON数据
// 打开页面 https://www.autohome.com.cn/car/#pvareaid=3311275 然后在浏览器的控制台中运行此脚本
console.log('你好 QWQ');
const element = document.querySelector('.tab-content-item');
function page() {
    const e = element.querySelector('#boxZ');
    console.log('读取中...请稍后...');
    if(!e || e.style.display == 'none') {
        document.childNodes[1].scrollTop = document.childNodes[1].scrollHeight;
        setTimeout(() => page(), 1000);
    }
    else read();
}
function read() {
    let model = [];
    let type = [];
    element.querySelectorAll('.uibox-con > dl').forEach((it) => {
        model.push({
            id: it.id,
            name: it.querySelector('div > a').innerText
        });
        it.querySelectorAll('li').forEach((i) => {
            if (i.id) type.push({
                id: i.id,
                model: it.id,
                name: i.querySelector('h4 > a').innerText
            });
        });
    });
    console.log('！！！读取完毕！！！');
    console.log('以下为品牌 JSON，点击末尾的复制按钮即可：');
    // 按 id 升序排列
    console.log(JSON.stringify(model.sort((a, b) => a.id - b.id)));
    console.log('以下为型号 JSON，点击末尾的复制按钮即可：');
    // 替换 id 中的字母然后将其按升序排列
    console.log(JSON.stringify(type.sort((a, b) => a.id.replace(/[a-z]+/g, '') - b.id.replace(/[a-z]+/g, ''))));
}
page();
