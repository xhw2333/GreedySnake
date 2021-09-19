// 定义食物类
class Food {
    element: HTMLElement;

    constructor(){
        this.element = document.getElementById('food')!;
    }

    // 获取横坐标
    get X(){
        return this.element.offsetLeft;
    }

    // 获取纵坐标
    get Y(){
        return this.element.offsetTop;
    }

    // 改变坐标
    change(){
        // 以10为单位前进
        let left = Math.round(Math.random()*29)*10;
        let top = Math.round(Math.random()*29)*10;

        this.element.style.left = left + 'px'; 
        this.element.style.top = top + 'px'; 
    }
}

// const food = new Food();
// console.log(food.X,food.Y);
// food.change();
// console.log(food.X,food.Y);

export default Food;