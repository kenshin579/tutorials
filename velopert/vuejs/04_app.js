// 새로운 뷰를 정의합니다
var app = new Vue({
    el: '#app', // 어떤 엘리먼트에 적용을 할 지 정합니다
    // data 는 해당 뷰에서 사용할 정보를 지닙니다
    data: {
        todos: [
            {text: 'Vue.js 튜토리얼 작성하기'},
            {text: 'Webpack2 알아보기'},
            {text: '사이드 프로젝트 진행하기'}
        ]
    }
});