class Snake {
  // 蛇的容器
  element: HTMLElement;
  // 表示蛇头
  head: HTMLElement;
  // 蛇的身体（包括舌头）
  body: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.body = this.element.getElementsByTagName("div");
  }

  // 获取蛇的x坐标
  get X() {
    return this.head.offsetLeft;
  }

  // 获取蛇的y坐标
  get Y() {
    return this.head.offsetTop;
  }

  // 设置x坐标
  set X(value: number) {
    if (this.X === value) return;
    if (value < 0 || value > 290) throw new Error("蛇撞墙了");
    // 掉头
    if (
      this.body.length > 1 &&
      (this.body[1] as HTMLElement).offsetLeft === value
    ) {
      value > this.X ? (value = this.X - 10) : (value = this.X + 10);
    }
    this.moveBody();
    this.head.style.left = value + "px";
    this.checkBody();
  }

  //设置y坐标
  set Y(value: number) {
    if (this.Y === value) return;
    if (value < 0 || value > 290) throw new Error("蛇撞墙了");
    // 掉头
    if (
      this.body.length > 1 &&
      (this.body[1] as HTMLElement).offsetTop === value
    ) {
        value > this.Y ? (value = this.Y - 10) : (value = this.Y + 10);
    }
    this.moveBody();
    this.head.style.top = value + "px";
    this.checkBody();
  }

  //添加身体
  addBody() {
    let div = document.createElement("div");
    this.element.appendChild(div);
  }

  // 移动身体
  moveBody() {
    for (let i = this.body.length - 1; i > 0; i--) {
      const x = (this.body[i - 1] as HTMLElement).offsetLeft,
        y = (this.body[i - 1] as HTMLElement).offsetTop;

      (this.body[i] as HTMLElement).style.left = x + "px";
      (this.body[i] as HTMLElement).style.top = y + "px";
    }
  }

  //检查是否撞到自己
  checkBody(){
      for(let i = 1; i < this.body.length; i++){
          const bd = this.body[i] as HTMLElement;
          if(this.X === bd.offsetLeft && this.Y === bd.offsetTop)
           throw new Error("撞到自己");
      }
  }
}

export default Snake;
