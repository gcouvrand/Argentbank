import Banner from "../../components/Banner";
import FeatureItem from "../../components/FeatureItem";
import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";

function Home(props) {
  return (
    <main>
      <Banner />
      <section className="features">
        <FeatureItem
          picture={IconChat}
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        <FeatureItem
          picture={IconMoney}
          title="More savings mean higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <FeatureItem
          picture={IconSecurity}
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>
    </main>
  );
}

export default Home;
