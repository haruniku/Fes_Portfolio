// アニメーションさせる要素のIDをリスト化
const targetList = [
    'skills_html',
    'skills_css',
    'skills_js',
    'skills_php',
    'skills_git',
    'skills_vue',
    'skills_react',
    'skills_py'
];

// IDから要素を取得して返す関数
function getElementId(id) {
    return document.getElementById(id)
}

// 要素の絶対位置を返す関数
function calcBottomPosition(element) {
    return element.getBoundingClientRect().bottom + window.pageYOffset
}

// スクロールされた時に動く関数
window.onscroll = function() {
    // 現在のスクロール量を計算
    const scrollPosition = window.pageYOffset +  window.innerHeight
    // IDのリストをそれぞれ計算
    targetList.forEach(item => {
        const element = getElementId(item)
        const bottom = calcBottomPosition(element)
        // スクロールが要素の位置より下なら、クラスを追加する       
        if(bottom < scrollPosition) {
            element.classList.add("scrollin")
        }
    })
}