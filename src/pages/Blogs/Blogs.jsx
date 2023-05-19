import React, { useRef } from "react";
// import ReactToPdf from "react-to-pdf";

const Blogs = () => {
  const ref = useRef();

  return (
    <div>
      <div ref={ref} style={{ backgroundColor: "#edffff" }}>
        <div className="container">
          <h1 className="text-center mb-5">
            **THE BLOG LIST** <br />
          </h1>
          <div className="qsn-ans">
            <div className="qsn-1">
              <h2>
                Question : Tell us the differences between uncontrolled and
                controlled components.??
              </h2>
              <h6>
                Answer : In React, controlled components refer to components
                that have their state and behavior controlled by the parent
                component. These components rely on props passed down from the
                parent component to update their state and behavior.
                Uncontrolled components refer to components that manage their
                own state internally.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-2">
              <h2>Question : How to validate React props using PropTypes ??</h2>
              <h6>
                Answer : With React props, you can send data to a component when
                you call on that component, including numbers, strings,
                functions, objects, and arrays. If you have multiple components,
                you can pass data from one component to another. To pass props
                between components, you can add them when the component is
                called, just like you would pass arguments when calling on a
                regular JavaScript function.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-3">
              <h2>
                Question : Tell us the difference between nodejs and express
                js??
              </h2>
              <h6>
                Answer : Express is a minimal and flexible node. js web
                application framework, providing a robust set of features for
                building single and multi-page, and hybrid web applications. On
                the other hand, Node. js is detailed as "A platform built on
                Chrome's JavaScript runtime for easily building fast, scalable
                network applications"..
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-4">
              <h2>
                Question : What is a custom hook, and why will you create a
                custom hook? ?
              </h2>
              <h6>
                Answer : Custom React JS hooks offer reusability as when a
                custom hook is created, it can be reused easily, which makes the
                code cleaner and reduces the time to write the code. It also
                enhances the rendering speed of the code as a custom hook does
                not need to be rendered again and again while rendering the
                whole code.
              </h6>
            </div>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* <ReactToPdf targetRef={ref} filename="blog_page.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Download PDF</button>}
      </ReactToPdf> */}
    </div>
  );
};

export default Blogs;
