function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.text}</dd>
    </div>
  );
}

export default Entry;
