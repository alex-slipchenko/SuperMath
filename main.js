
const myX = document.querySelector('#myX');
const myY = document.querySelector('#myY');
const myznak = document.querySelector('#myZnack');
const myButton = document.querySelector('#myButton')
const myOut = document.querySelector('.out')

myButton.addEventListener('click', () => {
    let rezult = 0;
    class SuperMath {

        constructor(X, Y, znak) {
            this.X = +myX.value;
            this.Y = +myY.value;

            switch (myznak.value) {
                case '+':
                    rezult = this.X + this.Y;
                    break;
                case '-': rezult = this.X - this.Y;
                    break;
                case '/':
                    rezult = this.X / this.Y;
                    break;
                case '*':
                    rezult = this.X * this.Y;
                    break;
                case '%':
                    rezult = this.X % this.Y;
                    break;
                default:
                    rezult = 'string';
            }

        }
        check(obj) {

            if (rezult !== 'string') {

                const myConfirm = confirm('You will continue?');
                if (myConfirm) {
                    return myOut.textContent = rezult;
                } else {
                    this.valueReset();
                    this.myInput();
                }
            } else {
                myOut.textContent = 'Please Entered:  + - / * %';
            }

        }
        myInput() {
            alert('Entered new data');

        }

        valueReset() {
            myX.value = 0;
            myY.value = 0;
            myOut.textContent = '';
        }
    }

    const myClass = new SuperMath();
    myClass.check();

});


