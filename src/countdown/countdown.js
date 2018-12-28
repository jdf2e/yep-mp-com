/*
 * updated 2018.11.21
 * by hanyuxinting
 */
Component({
  externalClasses: ['yepc-countdown', 'yepc-countdown-item', 'yepc-countdown-colon'],//拓展样式
  properties: {
    time: Number,
    format: {
      type: String,
      value: "HH:MM:SS"//'XX天XX时XX分XX秒'
    },
    callback: String
  },
  data: {
    _time: '',
    _hour: '',
    _minute: '',
    _second: '',
    _hasDay: false,
    _hasHour: true,
    _hasMinute: true,
    _hasSecond: true
  },
  created(){
  },
  ready(){
    this.initFormat();
    this.initTimer();
  },
  attached(){
  },
  methods: {
    initFormat() {
      let format = this.data.format;
      let arr = [];
      if(format.indexOf(':') != -1) {
        arr = format.split(':');
        if(arr.length >= 4) {
          this.setData({
            _hasDay: true
          });
        }
      } else {
        arr = format.split('XX');
        let hash = {
          '天': '_hasDay',
          '时': '_hasHour',
          '分': '_hasMinute',
          '秒': '_hasSecond'
        }
        this.setData({
          _hasDay: false,
          _hasHour: false,
          _hasMinute: false,
          _hasSecond: false
        });
        arr.forEach((i) => {
          console.log('arr', hash[i])
          this.setData({
            [hash[i]]: true,
            _format: arr,
            _formatChanged: true
          });
        })
      }

      console.log('arr', arr, this.data);
    },
    initTimer() {
      let time = parseInt(this.data.time);

      let me = this;
      let curr = time/1000;
      this.formatData(curr);
			let timer = setInterval(function() {
				curr  = curr - 1;
				if (curr <= 0) {
					clearInterval(timer);
					curr = 0;
					me.triggerEvent('callback', {}, {});
          me.formatData(curr);
				}	else {
				  me.formatData(curr);
				}
			}, 1000);
		},

    formatData(curr) {
      let day = '00';
      let hour = '00';
      let minute = '00';
      let second = '00';
      let formatTime = '';
      let _format = this.data._format;
      let _time = [];

      // 秒转化成 多时多分；
      const HOUR = 60 * 60;
      const MINUTE = 60;
      const DAY = 60 * 60 * 24;

      if(this.data._hasDay) {
        day = this.formatNum(curr / DAY );
        hour = this.formatNum(curr % DAY / HOUR);
        minute = this.formatNum(curr % DAY % HOUR / MINUTE);
        second = this.formatNum(curr % DAY % HOUR % MINUTE);

        // if(!this.data._hasHour) {
        //   day = this.formatNum(Math.ceil(curr / DAY));
        // }

        // if(!this.data._hasMinute) {
        //   // hour = this.formatNum(Math.ceil(curr % DAY / HOUR));
        //   second = this.formatNum(curr % DAY % MINUTE);
        // }

        if(!this.data._hasSecond) {
          minute = this.formatNum(Math.ceil(curr % DAY % HOUR / MINUTE));
        }
      } else {
        hour = this.formatNum(curr / HOUR);
        minute = this.formatNum(curr % HOUR / MINUTE);
        second = this.formatNum(curr % HOUR % MINUTE);

        if(!this.data._hasSecond) {
          minute = this.formatNum(Math.ceil(curr % HOUR / MINUTE));
        }
        // if(!this.data._hasMinute) {
        //   // hour = this.formatNum(Math.ceil(curr / HOUR));
        //   second = this.formatNum(curr % MINUTE);
        // }

      }

      if(this.data._formatChanged) {
        let arr = [];
        this.data._format.forEach((i) => {
          switch(i) {
            case '天':
              arr.push(day);
              break;
            case '时':
              arr.push(hour);
              break;
            case '分':
              arr.push(minute);
              break;
            case '秒':
              arr.push(second);
              break;
          }
        });
        formatTime = `${arr[0] || ''}${_format[1] || ''}${arr[1] || ''}${_format[2] || ''}${arr[2] || ''}${_format[3] || ''}${arr[3] || ''}${_format[4] || ''}`;
      } else {
        // formatTime = this.data._hasDay ? `${day}:` : '';
        // formatTime += this.data._hasHour ? `${hour}:` : '';
        // formatTime += this.data._hasMinute ? `${minute}:` : '';
        // formatTime += this.data._hasSecond ? `${second}` : ``;

        formatTime = this.data._hasDay ? `${day}:${hour}:${minute}:${second}` : `${hour}:${minute}:${second}`;
      }

      this.setData({
        _time: formatTime,
        _hour: hour,
        _minute: minute,
        _second: second
      });
    },

		formatNum(num) {
      num = parseInt(num);
			if (num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
    }
	}

});