import Food from "./Food";
import Snake from "./Snake";
import ScorePanel from "./ScorePanel";
import { Up, Left, Down, Right } from "../utils/const";

class GameControl {
  // 蛇
  snake: Snake;
  // 食物
  food: Food;
  // 积分面板
  scorePanel: ScorePanel;
  // 方向键
  direction: string = "";
  // 游戏是否结束
  isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel(10,5);

    this.init();
  }

  // 初始化
  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));

    this.run();
  }

  // 键盘事件处理
  keydownHandler(e: KeyboardEvent) {
    // console.log(this,e.key,e.keyCode);
    this.direction = e.key;
  }

  //蛇跑起来
  run() {
    let X = this.snake.X,
      Y = this.snake.Y;

    // 根据按键方向改变X、Y值
    switch (this.direction) {
      case Down:
      case "Down":
        Y += 10;
        break;
      case Up:
      case "Up":
        Y -= 10;
        break;
      case Left:
      case "Left":
        X -= 10;
        break;
      case Right:
      case "Right":
        X += 10;
        break;
    }

    this.checkEatFood(X, Y);

    try {
      // 设置蛇坐标
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      alert(e.message + " GAME OVER");
      this.isLive = false;
    }

    // 定时调用
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  //检测蛇是否吃到食物
  checkEatFood(x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      // 食物位置更新
      this.food.change();
      // 分数更新
      this.scorePanel.addScore();
      // 蛇变长
      this.snake.addBody();
    }
  }
}

export default GameControl;
