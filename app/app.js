
var app = angular.module('app',['ui.router'])
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'app/Home/index.html'
    })
    .state('next', {
        url: '/next_page',
        templateUrl: 'app/NextPage/index.html'
    })
    .state('Menu', {
        url: '/menu_page',
        templateUrl: 'app/Menu/index.html'
    })
    .state('Menu_2', {
        url: '/menu_page_2',
        templateUrl: 'app/Next-Manu/index.html'
    })
     // Start How To Coffee 
     .state('ht_1',{
        url: '/ht_1/สูตรกาแฟ_NICARAGUA_SWEET_AND_CRUNCHY',
        templateUrl: 'app/How-to-menu/ht_1.html'
    })
    .state('ht_2',{
        url: '/ht_2/FIZZY_INDIA_-_สูตรกาแฟอินเดีย',
        templateUrl: 'app/How-to-menu/ht_2.html'
    })
    .state('ht_3',{
        url: '/ht_3/สูตรกาแฟ_VARIATIONS_PARIS_PRALINE_CREAMY_INDULGENCE',
        templateUrl: 'app/How-to-menu/ht_3.html'
    })
    .state('ht_4',{
        url: '/ht_4/สูตรกาแฟ_VARIATION_PARIS_MACARON_ALMOND_MILK_RECIPE',
        templateUrl: 'app/How-to-menu/ht_4.html'
    })
    .state('ht_5',{
        url: '/ht_5/สูตรกาแฟ_VARIATIONS_PARIS_PRALINE_INDULGENCE',
        templateUrl: 'app/How-to-menu/ht_5.html'
    })
    .state('ht_6',{
        url: '/ht_6/สูตรกาแฟ_PARIS_BLACK_CHOCOLATE_MACCHIATO',
        templateUrl: 'app/How-to-menu/ht_6.html'
    })
    .state('ht_7',{
        url: '/ht_7/สูตรกาแฟ_INDONESIA_DISCOVERY',
        templateUrl: 'app/How-to-menu/ht_7.html'
    })
    .state('ht_8',{
        url: '/ht_8/สูตรกาแฟ_COLOMBIAN_PASSIOCCINO',
        templateUrl: 'app/How-to-menu/ht_8.html'
    })
    .state('ht_9',{
        url: '/ht_9/สูตรกาแฟเย็น_CAFFE_ALLA_SALENTINA',
        templateUrl: 'app/How-to-menu/ht_9.html'
    })
    .state('ht_10',{
        url: '/ht_10/สูตรกาแฟเย็น_CAFFE_SHAKERATO',
        templateUrl: 'app/How-to-menu/ht_10.html'
    })
    .state('ht_11',{
        url: '/ht_11/THYME_AND_GRAPEFRUIT_ETHIOPIA JAMMING_-_กาแฟเอธิโอเปียกับใบไทม์และองุ่น',
        templateUrl: 'app/How-to-menu/ht_11.html'
    })
    .state('ht_12',{
        url: '/ht_12/ลาเต้_-_CAFFE_LATTE',
        templateUrl: 'app/How-to-menu/ht_12.html'
    })
    .state('ht_13',{
        url: '/ht_13/เอสเพรสโซ่_มัคคิอาโต_-_ESPRESSO_MACCHIATO',
        templateUrl: 'app/How-to-menu/ht_13.html'
    })
    .state('ht_14',{
        url: '/ht_14/สูตรกาแฟ_HONEY_ALMOND_MILK_COFFEE',
        templateUrl: 'app/How-to-menu/ht_14.html'
    })
    .state('ht_15',{
        url: '/ht_15/สูตรเมนู_GRAPEFRUIT_&_THYME_COFFEE_COCKTAIL',
        templateUrl: 'app/How-to-menu/ht_15.html'
    })
    .state('ht_16',{
        url: '/ht_16/อเมริกาโน่_-_AMERICANO_BY_NESPRESSO',
        templateUrl: 'app/How-to-menu/ht_16.html'
    })
    .state('ht_17',{
        url: '/ht_17/',
        templateUrl: 'app/How-to-menu/ht_17.html'
    })
    .state('ht_18',{
        url: '/ht_18/มอคค่า_ลาเต้_-_MOCCA_LATTE',
        templateUrl: 'app/How-to-menu/ht_18.html'
    })
    .state('ht_19',{
        url: '/ht_19/สูตรกาแฟ_CAPPUCCINO_CREME_BRULEE',
        templateUrl: 'app/How-to-menu/ht_19.html'
    })
    .state('ht_20',{
        url: '/ht_20/สูตรกาแฟ_ORANGETTE',
        templateUrl: 'app/How-to-menu/ht_20.html'
    })
    .state('ht_21',{
        url: '/ht_21/เมนูสูตรลิมิเต็ด_LIEGEOIS_COFFEE_BARISTA',
        templateUrl: 'app/How-to-menu/ht_21.html'
    })
    .state('ht_22',{
        url: '/ht_22/เมนูกาแฟสูตรชะเอมอันหอมหวาน',
        templateUrl: 'app/How-to-menu/ht_22.html'
    })
    .state('ht_23',{
        url: '/ht_23/สูตรกาแฟ_MACHA_ICED_COFFEE',
        templateUrl: 'app/How-to-menu/ht_23.html'
    })
    .state('ht_24',{
        url: '/ht_24/สูตรกาแฟ_INTENSO_ON_ICE',
        templateUrl: 'app/How-to-menu/ht_24.html'
    })
    // Start blog content 1-24
    .state('page1', {
        url: '/blag/content/ประวัติของกาแฟ',
        templateUrl: 'app/Page.ReadMore/1.html'
    })
    .state('page2', {
        url: '/blag/content/วิธีดื่มกาแฟที่ถูกต้อง',
        templateUrl: 'app/Page.ReadMore/2.html'
    })
    .state('page3', {
        url: '/blag/content/ทำไมคนไทยจึงติด_กาแฟเข้ม-หวานมัน',
        templateUrl: 'app/Page.ReadMore/3.html'
    })
    .state('page4', {
        url: '/blag/content/กาแฟไม่ใส่น้ำตาลก็หวานได้',
        templateUrl: 'app/Page.ReadMore/4.html'
    })
    .state('page5', {
        url: '/blag/content/ทำไมกาแฟสำเร็จรูป_ไม่อร่อยเท่ากาแฟสด',
        templateUrl: 'app/Page.ReadMore/5.html'
    })
    .state('page6', {
        url: '/blag/content/เพราะกาแฟคืองานศิลปะ',
        templateUrl: 'app/Page.ReadMore/6.html'
    })
    .state('page7', {
        url: '/blag/content/กาแฟคั่วมือ_สร้างคุณค่าให้ชีวิต',
        templateUrl: 'app/Page.ReadMore/7.html'
    })
    .state('page8', {
        url: '/blag/content/เครื่องชงกาแฟ_สโลว์ไลฟ์_ดื่มอย่างมีสุนทรีย์',
        templateUrl: 'app/Page.ReadMore/8.html'
    })
    .state('page9', {
        url: '/blag/content/กาแฟ_เหมาะกับใครและไม่เหมาะกับใครบ้าง',
        templateUrl: 'app/Page.ReadMore/9.html'
    })
    .state('page10', {
        url: '/blag/content/คนไทยอยากเรียก_เอสเปรสโซ่เย็น_ผิดไหม',
        templateUrl: 'app/Page.ReadMore/10.html'
    })
    .state('page11', {
        url: '/blag/content/แคลอรี่ในเครื่องดื่มของมนุษย์ออฟฟิศ',
        templateUrl: 'app/Page.ReadMore/11.html'
    })
    .state('page12', {
        url: '/blag/content/กาแฟโบราณ_vs_กาแฟสด',
        templateUrl: 'app/Page.ReadMore/12.html'
    })
    .state('page13', {
        url: '/blag/content/เมล็ดกาแฟ_เก็บอย่างไรให้คงคุณภาพได้ดี',
        templateUrl: 'app/Page.ReadMore/13.html'
    })
    .state('page14', {
        url: '/blag/content/กากกาแฟ_มีประโยชน์นะ_ชงเสร็จแล้วอย่าเพิ่งทิ้ง',
        templateUrl: 'app/Page.ReadMore/14.html'
    })
    .state('page15', {
        url: '/blag/content/จากผลเชอร์รี่_สู่กาแฟถ้วยโปรด',
        templateUrl: 'app/Page.ReadMore/15.html'
    })
    .state('page16', {
        url: '/blag/content/คั่วเมล็ดกาแฟต่างกัน_ให้รสชาติที่ต่างกัน',
        templateUrl: 'app/Page.ReadMore/16.html'
    })
    .state('page17', {
        url: '/blag/content/ลาเต้_อาร์ต_ศิลปะเพิ่มเสน่ห์ให้กาแฟ',
        templateUrl: 'app/Page.ReadMore/17.html'
    })
    .state('page18', {
        url: '/blag/content/เมนูกาแฟเยอะจริง_สั่งอย่างไรดี',
        templateUrl: 'app/Page.ReadMore/18.html'
    })
    .state('page19', {
        url: '/blag/content/ดื่มกาแฟให้ได้ประโยชน์สูงสุด_โทษต่ำสุด',
        templateUrl: 'app/Page.ReadMore/19.html'
    })
    .state('page20', {
        url: '/blag/content/4_องค์ประกอบสำคัญของ_espresso_perfect_shot',
        templateUrl: 'app/Page.ReadMore/20.html'
    })
    .state('page21', {
        url: '/blag/content/5_ข้อ_ชงเอสเปรสโซ่ให้_perfect',
        templateUrl: 'app/Page.ReadMore/21.html'
    })
    .state('page22', {
        url: '/blag/content/เอสเปรสโซ่_คำเรียกคุ้นหูนี้คืออะไร',
        templateUrl: 'app/Page.ReadMore/22.html'
    })
    .state('page23', {
        url: '/blag/content/ไม่ดื่มกาแฟ_แต่ไปดื่มชาและน้ำอัดลมแทน_หลีกเลี่ยงคาเฟอีนได้จริงหรือ',
        templateUrl: 'app/Page.ReadMore/23.html'
    })
    .state('page24', {
        url: '/blag/content/หลัก_FABAF_กินกาแฟให้ได้อรรถรส',
        templateUrl: 'app/Page.ReadMore/24.html'
    })
    // end blog
    .state('categories', {
        url: '/Blog_Categories',
        templateUrl:'app/Blog/index.html'
    })
    .state('next-2',{
        url: '/blog_2',
        templateUrl:'app/Next/index.html'
    })
})