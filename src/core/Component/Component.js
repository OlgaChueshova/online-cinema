export class Component extends HTMLElement {
    constructor() {
        super();
        this.state = {};
        this.props = {};
        this.isShadow= false;
    }

    setState(callback) {
        this.state = callback(this.state);
        if(this.isShadow) {
            this.shadowRoot.innerHTML = this.render()
        }
        else {
            this.innerHTML = this.render()
        }
    }

    connectedCallback() {
        this.getHtml()?.innerHTML = this.render()
        this.componentDidMount();
    }

    disconnectedCallback() {
        this.componentWillUnMount()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.componentWillUpdate(name, oldValue, newValue);
        this.getAttributeNames().forEach(() => {
            this.props[name] = this.getAttribute(name);
        })
    }

    dispatch() {
        this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: this.props }));
    }

    componentDidMount() { }
    componentWillUpdate() { }
    componentWillUnMount() { }
    render() { };
}






