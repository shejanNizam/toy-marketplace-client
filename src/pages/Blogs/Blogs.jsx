import React, { useRef } from "react";
import { Helmet } from "react-helmet";
// import ReactToPdf from "react-to-pdf";

const Blogs = () => {
  const ref = useRef();

  return (
    <>
      <Helmet>
        <title>Blogs | Toy Cars</title>
      </Helmet>
      <div ref={ref} style={{ backgroundColor: "#edffff" }}>
        <div className="container m-8 p-8">
          <h1 className="text-center mb-5 text-4xl">
            **THE BLOG LIST** <br />
          </h1>
          <div className="qsn-ans">
            <div className="qsn-1">
              <h2 className="text-xl font-bold">
                Question : What is an access token and refresh token? How do
                they work and where should we store them on the client-side? ??
              </h2>
              <h6>
                Answer : You can store the access token and refresh token in the
                server-side session. The application can use web sessions to
                communicate with the server. The token is then available for any
                requests originating from server-side code.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-2">
              <h2 className="text-xl font-bold">
                Question : Compare SQL and NoSQL databases??
              </h2>
              <h6>
                Answer : SQL databases are vertically scalable, while NoSQL
                databases are horizontally scalable. SQL databases are
                table-based, while NoSQL databases are document, key-value,
                graph, or wide-column stores. SQL databases are better for
                multi-row transactions, while NoSQL is better for unstructured
                data like documents or JSON.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-3">
              <h2 className="text-xl font-bold">
                Question : What is express js? What is Nest JS ?? js??
              </h2>
              <h6>
                Answer : NestJS provides a more structured and opinionated
                approach, which can make it easier to build complex APIs with
                proper separation of concerns. Express, on the other hand, is
                more lightweight and flexible, which makes it a popular choice
                for simple or small-scale APIs.
              </h6>
            </div>
            <br />
            <br />
            <div className="qsn-4">
              <h2 className="text-xl font-bold">
                Question : What is MongoDB aggregate and how does it work ??
              </h2>
              <h6>
                Answer : Aggregation is a way of processing a large number of
                documents in a collection by means of passing them through
                different stages. The stages make up what is known as a
                pipeline. The stages in a pipeline can filter, sort, group,
                reshape and modify documents that pass through the pipeline.
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
    </>
  );
};

export default Blogs;
