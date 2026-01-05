import React, { useState } from "react";
import { Link , NavLink } from "react-router-dom";

function Home(props) {
  console.log({ props });

  return (
    <>    
      <section className="container-fluid">
        <div className="container"></div>
      </section>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-8 my-4 ">
            <div className="text bg-danger text-center py-3">
              Welcome Vishnu
            </div>
          </div>
        </div>
      </div>
      <section className="container-fluid">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <img
                src="https://images.adsttc.com/media/images/5b7e/c5d5/f197/cc0e/7200/00dd/newsletter/One_Dalton_Dusk_Hero_Rendering_Photo_Credit_Four_Seasons_One_Dalton.jpg?1535034827"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="text col-6">
              <h3>Aspire Towers </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus quos consectetur ducimus beatae commodi animi minus
                eius laborum ipsa deserunt, obcaecati reiciendis, inventore iste
                at nam praesentium magnam rem sint illo. Incidunt facilis
                maiores quae fugit sequi consectetur, voluptatem vero nulla
                dolorem accusamus repudiandae quos iste amet tempora nihil
                veniam nemo eius aliquid eligendi ratione harum recusandae
                velit! Provident earum blanditiis reprehenderit voluptate odit,
                sed corporis labore consectetur et, enim eligendi quod fuga
                odio. Dicta officia nemo iste, facilis molestiae recusandae
                deserunt nisi tenetur iusto, reprehenderit sequi, consectetur
                suscipit cupiditate nihil pariatur perspiciatis rerum quam
                earum? Atque praesentium consectetur placeat dolores! Facilis
                esse facere non obcaecati neque explicabo voluptates ratione
                aperiam! Dolorem nam molestias minus commodi deleniti
                praesentium. Quaerat doloribus debitis a voluptas vel neque
                error sit incidunt minima provident, beatae repellat recusandae
                id eveniet fuga veritatis culpa delectus labore! Aspernatur
                magnam aut, et beatae dolores debitis quas velit nostrum ullam
                cumque consectetur ex. Architecto itaque voluptate et laborum
                aperiam nulla nobis. Optio, porro. Quas totam qui culpa
                aspernatur eos.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum iusto facere ea quia, voluptatibus corporis odio saepe.
                Quisquam delectus autem ullam, explicabo obcaecati nam enim
                velit laboriosam fugiat odit eius vero est facilis alias aperiam
                odio qui ipsum culpa dolorum cum quia cumque repellat. Ducimus
                labore accusantium sit enim iure reiciendis qui. Inventore
                laborum fugiat sunt debitis ex, sint obcaecati.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid py-5 bg-light ">
        {/* container fluid access full windthh height */}

        <div className="container">
          <div className="row text-center  ">
            <div className="col-12  ">
              <div className="text h2">Quick Facts</div>
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 gx-3 gy-2 ">
            {" "}
            {/*   gx- left right paddin gon cols  */}
            <div className="col  ">
              <div className="text-center" style={{ backgroundColor: "gray" }}>
                <img
                  src="https://smartcitymohaliplots.realtynivesh.com/plot.png"
                  alt="land image"
                />
                <h4>tatal Land </h4>
                <p>8.5</p>
              </div>
            </div>
            <div className="col ">
              <div className="text-center" style={{ backgroundColor: "gray" }}>
                <img
                  src="https://smartcitymohaliplots.realtynivesh.com/plot.png"
                  alt=""
                />
                <h4>tatal Land </h4>
                <p>8.5</p>
              </div>
            </div>
            <div className="col ">
              <div className="text-center " style={{ backgroundColor: "gray" }}>
                <img
                  src="https://smartcitymohaliplots.realtynivesh.com/plot.png"
                  alt=""
                />
                <h4>tatal Land </h4>
                <p>8.5</p>
              </div>
            </div>
            <div className="col ">
              <div className="text-center " style={{ backgroundColor: "gray" }}>
                <img
                  src="https://smartcitymohaliplots.realtynivesh.com/plot.png"
                  alt=""
                />
                <h4>tatal Land </h4>
                <p>8.5</p>
              </div>
            </div>
            <div className="col ">
              <div className="text-center" style={{ backgroundColor: "gray" }}>
                <img
                  src="https://smartcitymohaliplots.realtynivesh.com/plot.png"
                  alt=""
                />
                <h4>tatal Land </h4>
                <p>8.5</p>
              </div>
            </div>
            <div className="col ">
              <div className="text-center" style={{ backgroundColor: "gray" }}>
                <img
                  src="https://smartcitymohaliplots.realtynivesh.com/plot.png"
                  alt=""
                />
                <h4>tatal Land </h4>
                <p>8.5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
