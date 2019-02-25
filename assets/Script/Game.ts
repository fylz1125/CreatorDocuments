
const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    // 远景摄像机
    @property(cc.Camera)
    farCamera: cc.Camera = null;

    // 近景摄像机
    @property(cc.Camera)
    nearCamera: cc.Camera = null;

    @property(cc.Sprite)
    bg01: cc.Sprite = null;

    @property(cc.Sprite)
    bg02: cc.Sprite = null;

    // 地板
    @property(cc.Sprite)
    nearbg01: cc.Sprite = null;

    @property(cc.Sprite)
    nearbg02: cc.Sprite = null;


    farCount = 1;
    nearCount = 1;

    farSpeed = 30;
    nearSpeed = 300;

    start() {
        
    }

    onLoad() {
    }
    update(dt) {
        // 更新摄像机
        this.updateFarCamera(dt)
        this.updateNearCamera(dt);
        
       
    }

    updateFarCamera(dt:number) {
        this.farCamera.node.x += dt*this.farSpeed;
        let yu = this.farCount % 2;
        if (yu == 1) {
            if (this.farCamera.node.x > this.farCount * this.bg01.node.width) {
                this.bg01.node.x = (this.farCount+1) * this.bg01.node.width;
                this.farCount++;
            }
        } else {
            if (this.farCamera.node.x > this.farCount * this.bg01.node.width) {
                this.bg02.node.x = (this.farCount+1) * this.bg01.node.width;
                this.farCount++;
            }
        }
    }

    updateNearCamera(dt: number) {
        this.nearCamera.node.x += dt*this.nearSpeed;
        let yu = this.nearCount % 2;
        if (yu == 1) {
            if (this.nearCamera.node.x > this.nearCount * this.nearbg01.node.width) {
                this.nearbg01.node.x = (this.nearCount+1) * this.nearbg01.node.width;
                this.nearCount++;
            }
        } else {
            if (this.nearCamera.node.x > this.nearCount * this.nearbg02.node.width) {
                this.nearbg02.node.x = (this.nearCount+1) * this.nearbg02.node.width;
                this.nearCount++;
            }
        }
    }
    
}
