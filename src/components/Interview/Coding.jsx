import Card from "../shared/Card";

function Coding() {
  const half = "col-lg-6";
  const full = "col-lg-12";
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <Card width={half} title="Infinite currying">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/infinitecurrying.png"
              />
            </Card>
            <Card width={half} title="Fibonacci Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/fib.png"
              />
            </Card>
            <Card width={half} title="factorial Memoization">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/factorial.png"
              />
            </Card>
            <Card width={half} title="Palindrome">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/palindrome.png"
              />
            </Card>
            <Card width={half} title="Anagram">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/Anagram.png"
              />
            </Card>
            <Card width={half} title="Reverse a string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/reverse.png"
              />
            </Card>
            <Card width={half} title="Sorting a Array">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/sortingArray.png"
              />
            </Card>
            <Card width={full} title="Search List Javascript">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/search.png"
              />
            </Card>
            <Card
              width={half}
              title="Print active names in ascending order of age from object"
            >
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/PrintNameSortAge.png"
              />
            </Card>
            <Card width={half} title="Remove Duplicate from array">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/removeduplicate.png"
              />
            </Card>
            <Card width={half} title="Range Creator">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/rangecreator.png"
              />
            </Card>
            <Card width={half} title="Shuffle Array Randomly">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/shuffle.png"
              />
            </Card>
            <Card width={half} title="Finding Number of vowels in string">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/findingvowels.png"
              />
            </Card>
            <Card width={half} title="Panagram">
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/panagram.png"
              />
            </Card>
            <Card
              width={half}
              title="Maximum Frequency in string/array and its count"
            >
              <img
                className="img-fit"
                alt="infinite curring"
                width="100"
                src="/assets/images/code/Maxfrequency.png"
              />
            </Card>
            <Card width={full} title="Output Based javascript question">
              <ul>
                <li>
                  console.log(1 + "2" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 "> // "122"</span>
                </li>
                <li>
                  console.log(1 + +"2" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//"32"</span>
                </li>
                <li>
                  console.log(1 + -"1" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">// 02</span>
                </li>
                <li>
                  console.log(+"1" + "1" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//112</span>
                </li>
                <li>
                  console.log( "A" - "B" + "2");{" "}
                  <span className="text-primary fw-bold mb-1 ">//"NAN2"</span>
                </li>
                <li>
                  console.log( "A" - "B" + 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">//NAN</span>
                </li>
                <li>
                  console.log(0 || 1);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 1</span>
                </li>
                <li>
                  console.log(1 || 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 1</span>
                </li>
                <li>
                  console.log(0 && 1);{" "}
                  <span className="text-primary fw-bold mb-1 "> // 0</span>
                </li>
                <li>
                  console.log(1 && 2);{" "}
                  <span className="text-primary fw-bold mb-1 ">// 2</span>
                </li>
                <li>
                  console.log(false == '0'){" "}
                  <span className="text-primary fw-bold mb-1 "> // true</span>
                </li>
                <li>
                  console.log(false === '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// false</span>{" "}
                </li>
                <li>
                  console.log(false != '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// false</span>
                </li>
                <li>
                  console.log(false !== '0'){" "}
                  <span className="text-primary fw-bold mb-1 ">// true</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coding;
