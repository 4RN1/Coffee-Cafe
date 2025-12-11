
import "../style/delivery.css"; // Import CSS

const Delivery = () => {
  return (
    <div className="delivery-container">
      <h1 className="delivery-title">მიწოდების სერვისი</h1>

      <p className="delivery-text">
        ჩვენი კაფე გთავაზობთ სწრაფ და კომფორტულ მიწოდების სერვისს, რათა თქვენი
        შეკვეთა თქვენამდე შეუფერხებლად და უსაფრთხოდ მიაღწიოს. გთხოვთ გაეცნოთ
        მიწოდების პირობებს:
      </p>

      <h2 className="delivery-heading">📌 მიწოდების დრო</h2>
      <p className="delivery-text">
        მიწოდება განხორციელდება შეკვეთის დამუშავებიდან საშუალოდ 20-45 წუთში,
        მდებარეობის მიხედვით.
      </p>

      <h2 className="delivery-heading">📌 მიწოდების ზონები</h2>
      <p className="delivery-text">
        ჩვენი მიწოდება მოქმედებს მხოლოდ თბილისის ფარგლებში. ზოგიერთი შორეული
        რაიონისთვის შესაძლოა დაემატოს დამატებითი გადასახადი.
      </p>

      <h2 className="delivery-heading">📌 მიწოდების საფასური</h2>
      <p className="delivery-text">
        სტანდარტული მიწოდების ღირებულება განისაზღვრება თქვენს მისამართზე
        დაყრდნობით და აისახება შეკვეთის გაფორმების დროს.
      </p>

      <h2 className="delivery-heading">📌 შეკვეთის ცვლილება ან გაუქმება</h2>
      <p className="delivery-text">
        შეკვეთის ცვლილება ან გაუქმება შესაძლებელია მხოლოდ შეკვეთის
        დამუშავებამდე. დამუშავების შემდეგ, ცვლილება შეუძლებელია.
      </p>

      <h2 className="delivery-heading">📌 უსაფრთხოება</h2>
      <p className="delivery-text">
        ჩვენი კურიერები იცავენ ჰიგიენის ყველა სტანდარტს და უზრუნველყოფენ
        პროდუქტის უსაფრთხო მიწოდებას.
      </p>
    </div>
  );
};

export default Delivery;
