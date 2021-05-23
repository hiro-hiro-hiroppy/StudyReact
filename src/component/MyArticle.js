import React, { Component } from 'react';
import MyNew from './MyNew';

export default class MyArticle extends Component {
    renderIfNew(isNew) {
        if (isNew) {
            return <MyNew />
        }
    }

    render() {
        return (
            <React.Fragment>
                <dt>
                    <a href={this.props.url}>
                        {this.props.title}
                    </a>
                    {/* ?? Ver */}
                    {this.props.isNew ? <MyNew />:null}
                    {/* if Ver */}
                    {
                        (() => {
                            if(this.props.isNew){
                                return <MyNew />
                            }
                        })()
                    }
                    {/* 関数Ver */}
                    {this.renderIfNew(this.props.isNew)}
                </dt>
                <dd>
                    {this.props.description}
                </dd>
            </React.Fragment>
        )
    }
};
