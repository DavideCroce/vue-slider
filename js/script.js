console.log('VUE OK!', Vue);

Vue.config.devtools = true;

const TrueDamage = new Vue ({
    el: '#root',
    data: {
        currentIndex: 0,
        team: [
            'img/ekko.jpg',
            'img/senna.jpg',
            'img/akali.jpg',
            'img/yasuo.jpg',
            'img/qiyana.jpg',
        ],
        names: [
            'EKKO',
            'SENNA',
            'AKALI',
            'YASUO',
            'QIYANA',
        ],
    },
    methods:{
        active(index){
            return index === this.currentIndex;
        },
        setCharacter(index){
            this.currentIndex = index;
        },
        before(){
            this.currentIndex = this.currentIndex - 1;
        },
        after(){
            this.currentIndex = this.currentIndex + 1;
        }
    }
})