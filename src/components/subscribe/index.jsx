import "./style.css";

function SubscribeUs() {
  const handleSubscribe = () => {
    alert("Your Have Subscribed Successfully");
  };
  return (
    <div className="container-full">
      <h1>Subscribe</h1> <h3>to</h3> <h2>our Newsletter</h2>
      <p>Stay updated with the latest trends and offers!</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
    </div>
  );
}

export default SubscribeUs;
