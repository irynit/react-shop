import "./Categories.scss";
export default function Categories() {
  return (
    <section className="categories">
      <div className="container categories__container">
        <div className="categories__col">
          <div className="categories__col-row">1</div>
          <div className="categories__col-row">2</div>
        </div>
        <div className="categories__col">
          <div className="categories__col-row">3</div>
        </div>
        <div className="categories__col-large">
          <div className="categories__col-large-top">
            <div className="categories__col">
              <div className="categories__col-row">4</div>
            </div>
            <div className="categories__col">
              <div className="categories__col-row">6</div>
            </div>
          </div>
          <div className="categories__col-large-bottom">
            <div className="categories__col-row">5</div>
          </div>
        </div>
      </div>
    </section>
  );
}
