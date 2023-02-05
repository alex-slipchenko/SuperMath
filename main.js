
const myX = document.querySelector('#myX');
const myY = document.querySelector('#myY');
const myznak = document.querySelector('#myZnack');
const myButton = document.querySelector('#myButton')
const myOut = document.querySelector('.out')

myButton.addEventListener('click', () => {
    let rezult = 0;
    class SuperMath {

        constructor(X, Y) {
            this.X = +myX.value;
            this.Y = +myY.value;


        }
        check(obj) {

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

            if (rezult !== 'string') {
                
                let myConfirm = confirm('You will continue?');
                (myConfirm) ? (myOut.textContent = rezult) : (this.#valueReset(), this.myInput());
                
            } else {
                myOut.textContent = 'Please Entered:  + - / * %';
            }

        }
        myInput() {
            alert('Entered new data');

        }

        #valueReset() {
            myX.value = '';
            myY.value = '';
            myznak.value = '';
            myOut.textContent = '';
        }
    }

    const myClass = new SuperMath();
    myClass.check();
   
});

