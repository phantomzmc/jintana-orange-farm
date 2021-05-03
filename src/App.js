import './App.css';
import AbountMe from './component/abount/abount'
import Product from './component/product/product'
import Hero from './component/hero/hero'


function App() {
  return (
    <div className="App">
      
      <Hero />

      <div className="content">
        <h1 className="title">Abount me</h1>
        <AbountMe />
        <hr />
        <h1 className="title">รูปสวน</h1>
        <div class="grid grid-cols-3 gap-4">
          {/* <img class="object-contain md:object-scale-down" src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/130575359_105664564746969_4795610443701436927_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHuEtjFvdQ7QT7XatHGCYnLZ5JdiEpOnKBnkl2ISk6coAT2B2ghWTTvozcar1K-pq9qrpdGZqpugPThclI4PROn&_nc_ohc=iVcrH2TZe8sAX-2BPCL&_nc_ht=scontent.fbkk12-4.fna&oh=d4e7bb875abebc9a05a8fadd0b34a8c2&oe=609D7FC3" />
          <img class="object-contain md:object-scale-down" src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/130575359_105664564746969_4795610443701436927_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHuEtjFvdQ7QT7XatHGCYnLZ5JdiEpOnKBnkl2ISk6coAT2B2ghWTTvozcar1K-pq9qrpdGZqpugPThclI4PROn&_nc_ohc=iVcrH2TZe8sAX-2BPCL&_nc_ht=scontent.fbkk12-4.fna&oh=d4e7bb875abebc9a05a8fadd0b34a8c2&oe=609D7FC3" />
          <img class="object-contain md:object-scale-down" src="https://scontent.fbkk12-4.fna.fbcdn.net/v/t1.6435-9/130575359_105664564746969_4795610443701436927_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeHuEtjFvdQ7QT7XatHGCYnLZ5JdiEpOnKBnkl2ISk6coAT2B2ghWTTvozcar1K-pq9qrpdGZqpugPThclI4PROn&_nc_ohc=iVcrH2TZe8sAX-2BPCL&_nc_ht=scontent.fbkk12-4.fna&oh=d4e7bb875abebc9a05a8fadd0b34a8c2&oe=609D7FC3" /> */}
        </div>
        <hr />
        <h1 className="title">รูปสินค้า</h1>
        <Product />
        {/* <div class="grid grid-cols-4 gap-3">
          
        </div> */}
        <hr />
        <h1 className="title">แผนที่</h1>
        <hr />
      </div>
      <footer>

      </footer>
    </div>
  );
}
export default App;
