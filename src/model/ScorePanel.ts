class ScorePanel {
    // 设置分数、等级
    score = 0;
    level = 1;

    // 设置其所在的元素
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 最大等级
    maxLevel:number;
    // 每几分升一级
    upScore:number;

    constructor(maxLevel:number=10,upScore:number=10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 分数增加
    addScore(){
        this.scoreEle.innerText = ++this.score + '';
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    // 等级提升
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerText = ++this.level + '';
        }
    }

}

export default ScorePanel;