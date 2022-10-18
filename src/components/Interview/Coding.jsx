import Card from "../shared/Card";

function Coding() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            <Card width={half} title="Infinite currying">
              <img
                class="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/infinitecurrying.png"
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coding;
