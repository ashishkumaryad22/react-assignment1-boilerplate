import React, { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

const Dashboard = () => {
    const [article, setArticale] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&q=
    ${props.searchText}&apikey=${props.api}&pageSize=${props.pageSize}&page=${page}`;

        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setLoading(false);
        setArticale(parsedData.article);
        setTotalResults(parsedData.totalResults);
    }
    useEffect(() => {
        updateNews();

        return () => {

        }
    }, [])


    const nextClickHandler = async () => {
        setPage(page + 1)
        updateNews();
    };
    const prevClickHandler = async () => {
        setPage(page - 1)
        updateNews();
    };
    return (
        <>
            <div className="container my-3">
                <h2 className="text-center" style={{ margin: "40px 0px" }}>
                    The News App- Top Headlines...
                </h2>

                {/* <h3>Tne News App- Top Headlines...</h3> */}
                {loading && <Spinner />}
                <div className="row">
                    {!loading &&
                        article.map((e) => {
                            return (
                                <div className="col-md-4" key={e.url}>
                                    <Card
                                        title={e.title ? e.title.slice(0, 44) : ""}
                                        description={
                                            e.description ? e.description.slice(0, 80) : ""
                                        }
                                        imageUrl={e.urlToImage}
                                        newsUrl={e.url}
                                        author={e.author}
                                        date={e.publishedAt}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button
                        disabled={page <= 1}
                        type="button"
                        className="btn btn-success"
                        onClick={prevClickHandler}
                    >
                        &larr; Previous
                    </button>
                    <button
                        disabled={
                            page + 1 >
                            Math.ceil(totalResults / props.pageSize)
                        }
                        type="button"
                        className="btn btn-success"
                        onClick={nextClickHandler}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </>
    );
}

export default Dashboard;