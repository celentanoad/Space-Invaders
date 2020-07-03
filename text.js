    function Text() {
        this.text = ''
        this.setText = function(str) {
            this.text = str;
        }
        this.show = function() {
            textSize(50);
            text(this.text, 300, 100);
            fill(250, 100, 10);
        }
    }
    