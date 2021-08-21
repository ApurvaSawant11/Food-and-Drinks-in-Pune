import "./styles.css";
import { useState } from "react";

const dishesDB = {
  Snacks: [
    {
      name: "BHEL",
      imgURL: require("../images/bhel.jpg"),
      location: "Kalyan Bhel (Multiple Outlets)",
      price: "₹₹",
      rating: "4.7/5",
      des:
        "Kalyan Bhel gives you the sour, spicy, and mouthwatering taste of bhel. It costs more than usual but has a lovely taste. You should definitely try it once!"
    },
    {
      name: "VADA PAV",
      imgURL: require("../images/vadapav.png"),
      location: "Garden Vada Pav, 948, And 949, Bootee Street, Camp",
      price: "₹",
      rating: "4.9/5",
      des:
        "One of the oldest and most famous vada-pav stalls in town, this one is a must-try if you haven’t had it yet.  Don’t forget to ask for some churra on the side"
    },
    {
      name: "BHAKARWADI",
      imgURL: require("../images/bakarwadi.jpg"),
      location: "Chitale Bandhu (Multiple Outlets)",
      price: "₹₹",
      rating: "4.7/5",
      des:
        "Most loved snack of Maharashtra. It's crispy, spicy and sweet at the same time. And the best part is, you can order it online! "
    }
  ],
  "North Indian": [
    {
      name: "BAHUBALI THALI",
      imgURL: require("../images/bahubalithali.jpg"),
      location: "House of Paratha, JM Road, Opp.To Sambhaji Garden",
      price: "₹₹",
      rating: "4.6/5",
      des:
        'This is a big challenge for food lovers.It\'s more than enough for 4-5 people! This thali consist of atleast 18 items which satisfies all your taste buds. So gather your gang and "tut pado" on this massive meal.'
    },
    {
      name: "CHICKEN/MUTTON THALI",
      imgURL: require("../images/muttonthali.jpg"),
      location: "Hotel Jagdamba, Pune-Banglore Highway, Khedshivapur",
      price: "₹",
      rating: "4.8/5",
      des:
        "Do try their Chicken or Mutton thali which comes with unlimited curry, fried meat, roti/jowar or bajra bhakri and rice along with generous amount of ghee"
    },
    {
      name: "PITHLA BHAKRI",
      imgURL: require("../images/pithlabhakri.jpg"),
      location: "Sinhgad Fort",
      price: "₹",
      rating: "4.7/5",
      des:
        'Take your bike, ride upto Sinhgad fort and enjoy this authentic pithla bhakri. I suggest you visit this place during monsoon. The beautiful weather, garma garam onion pakoras and pithla bhakri is the best combination. And that spicy "theecha" is cheery on top. Also don\'t forget to try matka dahi while you are there. '
    }
  ],
  "South Indian": [
    {
      name: "IDLI VADA",
      imgURL: require("../images/vaishali.jpeg"),
      location: "Vaishali, 1218/1, Fergusson College Road",
      price: "₹₹",
      rating: "4.7/5",
      des:
        "Hotel Vaishali has the most decilious sambar. This place offers idlis, dosas and uttapams. It's difficult to get a table here, so try everything once you get in."
    },
    {
      name: "RAGI DOSA",
      imgURL: require("../images/annaidli.jpg"),
      location:
        "Anna Idli, 273/5, Baner Road, Shambhu Vihar Society, Sanewadi, Aundh",
      price: "₹",
      rating: "4.7/5",
      des:
        "This place has the largest variety of South-Indian food. They have over 14 types of dosas. Try their Ragi dosa and mini idlis."
    },
    {
      name: "PODU THATTU IDLI",
      imgURL: require("../images/iddos.jpg"),
      location:
        "Iddos, Nutan Prasad, Shop no 4,5, Society, Paud Rd, Kothrud, Pune",
      price: "₹₹",
      rating: "4.5/5",
      des:
        "Iddos has classic dishes as well as innovative dishes. Do try their Podu Thattu Idli,  Rawa Idli and uttapam."
    }
  ],
  Burger: [
    {
      name: "CHICKEN JUMBO BURGER",
      imgURL: require("../images/kingburger.jpg"),
      location: "King burger, East Street, Camp, Pune",
      price: "₹",
      rating: "4.8/5",
      des:
        "This juicy, creamy burger is all you need on your low days. You won't find a burger this awesome and filling without putting a hole in your wallet. Warning: buy the jumbo burger only if you are starving for days!!"
    },
    {
      name: "BARN X-TREME BURGER",
      imgURL: require("../images/burgerbarn.jpg"),
      location: "The Burger Barn Cafe (Multiple Outlets)",
      price: "₹₹",
      rating: "4.6/5",
      des:
        "Want to sharpen your jaws? You have found the tastiest burger for this exercise. This burger is stacked with chicken, eggs, salami, cheese, mushrooms and what not. Give it a shot."
    },
    {
      name: "TERIYAKI BURGER",
      imgURL: require("../images/teriyaki.JPG"),
      location: "Burgertron, Wanowrie, Pune",
      price: "₹₹",
      rating: "4.7/5",
      des:
        "This food truck has very comforting juicy burgers. The teriyaki sauce chicken patty hits different with fried noodles."
    }
  ],
  Desserts: [
    {
      name: "MASTANI",
      imgURL: require("../images/sujatamastani.jpg"),
      location: "Sujata Mastani (Multiple Outlets)",
      price: "₹₹",
      rating: "4.6/5",
      des:
        "If you are in Pune, don't miss out on this soul soothing mastani. Try their Mango Mastani and their special Mango Kesar Dry Fruit Mastani."
    },
    {
      name: "CHEESECAKE",
      imgURL: require("../images/cheesecake.jpg"),
      location:
        "German Bakery, 92, N Main Rd, Ragvilas Society, Koregaon Park, Pune",
      price: "₹₹",
      rating: "4.4/5",
      des:
        "Remember Chandler and Rachel in F.R.I.E.N.D.S ? Here you will definitely fight for a bigger portion of the cake. And they have so many flavors that you get confused which one to buy. But why just one? Have as many as you want."
    },
    {
      name: "MALAI GOLA",
      imgURL: require("../images/malaigola.jpg"),
      location: " Manasi Malai Gola, Bharati Vidyapeeth Road, Dhankawadi",
      price: "₹",
      rating: "4.7/5",
      des:
        "They serve one-of-a-kind ice golas topped with lots of cream, mawa, and dry fruits. It’s quite a heavy dessert, so save some space for this delicious dessert."
    }
  ]
};

export default function App() {
  const [selectedCuisines, setCuisines] = useState("Snacks");
  function cuisinesClickHandler(cuisines) {
    setCuisines(cuisines);
  }

  return (
    <div className="App">
      <section className="header">
        <h1>🥗 Food & Drinks In Pune 🍛</h1>
      </section>

      <div className="about">
        <p>
          Pune has great variety of good places where you can satisfy your food
          cravings. If you are in Pune, don't forget to try atleast one of my
          favorite dishes. I bet you will fall in love with these delicious
          meals.
        </p>
        <p>Check out my favorite dishes from below cuisines!</p>
      </div>

      <div>
        {Object.keys(dishesDB).map((cuisines) => (
          <button onClick={() => cuisinesClickHandler(cuisines)}>
            {cuisines}
          </button>
        ))}
      </div>

      <hr />

      <section className="dish-grid">
        {dishesDB[selectedCuisines].map((dish) => (
          <div className="card">
            <div className="dish-name">{dish.name}</div>
            <div className="imgg">
              <img alt={dish.name} src={dish.imgURL} />
            </div>
            <div className="details">
              <div className="dish-loc">
                <strong>Location:</strong> {dish.location}
              </div>
              <div className="dish-price">
                <strong>Price:</strong> {dish.price}{" "}
              </div>
              <div className="dish-rating">
                <strong>Rating:</strong> {dish.rating}
              </div>
              <div className="dish-des">
                <strong>Description:</strong> {dish.des}
              </div>
            </div>
          </div>
        ))}
      </section>

      <hr />
      <p>More soon!</p>

      <section className="footer">
        <ul>
          <li className="footerLink">
            <a href="https://github.com/ApurvaSawant11" target="_blank">
              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </li>

          <li className="footerLink">
            <a href="https://twitter.com/ApurvaSawant11" target="_blank">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </li>

          <li className="footerLink">
            <a
              href="https://www.linkedin.com/in/apurvasawant11" target="_blank">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>

          <li className="footerLink">
            <a href="https://apurvasawant11.netlify.app/" target="_blank">
              <i className="fas fa-briefcase fa-2x"></i>
            </a>
          </li>
        </ul>
        <p>Made with ❤️ by Apurva</p>
      </section>
    </div>
  );
}
