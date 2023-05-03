import "./Button.css"

export function Button({type, caption, action, bg="0"}){
    return (
        <button type={type}
                onClick={action} 
                className = { bg=="0" ? "btn btn-bg1" : "btn btn-bg2"} 
                >
            {caption}
        </button>
    );
}