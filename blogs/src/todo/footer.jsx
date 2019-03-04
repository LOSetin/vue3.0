import '../assets/styles/footer.styl';

export default {
  data() {
    return {
      author: 'Mufengs',
    };
  },
  // 这边的render如果没有h 会报错footer.jsx: Duplicatedeclaration "h"
  render(h,params) {
    return (
        <div id="footer">
          <span>Writen by {this.author}</span>
        </div>
    );
  },
};
