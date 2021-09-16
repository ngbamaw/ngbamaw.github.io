<template>
    <div class="counter" :class="{ change: change }">
        <div class="counter-back">
            <div class="counter-top">
                <div class="number">{{ back }}</div>
            </div>
            <div class="counter-bottom">
                <div class="number">{{ back }}</div>
            </div>
        </div>
        <div class="counter-front" @animationend="switchEnd">
            <div class="counter-top">
                <div class="number">{{ front }}</div>
            </div>
            <div class="counter-bottom">
                <div class="number">{{ front }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Counter",
    props: ["number"],
    data() {
        return {
            front: this.number,
            back: 4,
            change: false
        };
    },
    methods: {
        switchEnd() {
            console.log("onSwitch");
            this.change = false;
            this.front = this.number;
            this.back = 0;
        }
    },
    watch: {
        number(current, prev) {
            this.front = prev;
            this.back = current;
            this.change = true;
        }
    }
};
</script>

<style lang="scss" scoped>
$width: 100px;
$height: 200px;
.counter {
    width: $width;
    height: $height;
    position: relative;
}
.counter-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    animation: flip-back-index 0.5s forwards;
    .counter-bottom {
        transform: rotateX(180deg);
        transform-origin: top;
    }
}
.counter-front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    .counter-top {
        transform: rotateX(0deg);
        transform-origin: bottom;
    }
}

.change {
    .counter-front {
        animation: flip-front-index 0.5s forwards;
        .counter-top {
            animation: flip-front 0.5s forwards;
        }
    }
    .counter-back {
        animation: flip-back-index 0.5s forwards;
        .counter-bottom {
            animation: flip-back 0.5s forwards;
        }
    }
}
.counter-top {
    height: 50%;
    width: 100%;
    overflow: hidden;
    background-color: hsl(236, 21%, 26%);
}
.counter-bottom {
    height: 50%;
    width: 100%;
    overflow: hidden;
    background-color: hsl(236, 21%, 26%);
    filter: brightness(1.1);
    .number {
        transform: translateY(-50%);
    }
}

.number {
    height: $height;
    width: 100%;
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 48px;
    color: hsl(345, 95%, 68%);
    align-content: center;
    align-items: center;
    justify-content: center;
    text-align: center;
}

@keyframes flip-back-index {
    0% {
        z-index: 9998;
    }
    50% {
        z-index: 9999;
    }
    100% {
        z-index: 9999;
    }
}
@keyframes flip-front-index {
    0% {
        z-index: 9999;
    }
    50% {
        z-index: 9998;
    }
    100% {
        z-index: 9998;
    }
}

@keyframes flip-back {
    from {
        transform: rotateX(180deg);
    }
    to {
        transform: rotateX(0deg);
    }
}
@keyframes flip-front {
    from {
        transform: rotateX(0deg);
    }
    to {
        transform: rotateX(180deg);
    }
}
</style>
