import React from "react";
import QuoteCard from "./QuotesCard";

function SimpsonsQuoteList() {
  const [quotes, setQuotes] = React.useState([]);

  function FetchQuotes(quoteCount) {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${quoteCount}`)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }

  return (
    <div>
      <h1>Quotes List</h1>
      <button onClick={() => FetchQuotes(10)}>
        Click to get 10 random quotes
      </button>
      <QuoteCard />
      {quotes.map(function (quote, index) {
        return <QuoteCard key={index} {...quote} />;
      })}
    </div>
  );
}

export default SimpsonsQuoteList;
