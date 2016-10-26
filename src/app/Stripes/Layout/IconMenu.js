


"use strict"

import React from 'react'
import { render } from 'react-dom'
import { StripesTheme } from '../Core/Stripes'
import {Icon} from  '../Symbols/Icon'
import {Paper} from './Paper'

export class IconMenu extends StripesTheme {

    static defaultProps = {
        direction: "bottom",
        type: 'default',
        disabled: false,
        iconid: 'filter',
        style: {},
        "max-width": '100%'
    }

    constructor(props) {
        super(props);

        this.state = {
            style: {},
            open: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.getStyles = this.getStyles.bind(this);
        this.toggleMenuOnBlur = this.toggleMenuOnBlur.bind(this);
    }

    componentDidMount() {
        this.setState({
            style: this.getStyles()
        });
    }

    toggleMenu(e, show, focus) {
        console.log(show);
        this.setState({
            open: show === undefined ? !this.state.open : show
        }, () => {
            if(this.state.open) {
                console.log('i will focus...');
                this.refs.MenuBody.focus();
            }
            this.setState({
                style: this.getStyles()
            });
        });
    }

    toggleMenuOnBlur(e) {
        this.toggleMenu(null, false, false);
        e.preventDefault();
        e.stopImmediatePropagation;
        return false;
    }

    getStyles() {
        var color = this.getColors()[this.props.type];
        var spacing = this.getSpacing()[this.props.type];
        var styleObj = {
            base: {
                position: 'relative',
                display: 'inline'
            },
            icon: {
                cursor: 'pointer'
            },
            paper: {
                position: 'absolute',
                top: '100%',
                left: '0',
                transition: 'all .5s',
                maxHeight: this.state.open ? '800px' : '0',
                opacity: this.state.open ? '1.0' : '0.0',
                maxWidth: this.props["max-width"],
                overflow: 'hidden',
                padding: 0,
                minWidth: '200px'
            }
        }

        return styleObj;
    }

    render() {
        var baseStyle = this.state.style.base; //this.props.style ? Object.assign(this.state.style.base, this.props.style) : this.state.style.base;
        console.log(this.state.style.paper);
        return (
            <section
                style={baseStyle}
                disabled={this.props.disabled}
            >
                <Icon
                    iconid={this.props.iconid}
                    size="medium"
                    onClick={this.toggleMenu}
                    basestyle={this.state.style.icon}
                />
                <Paper
                    style={this.state.style.paper}
                    ref="MenuBody"
                    onBlur={this.toggleMenuOnBlur}
                >
                    {this.props.children}
                </Paper>
            </section>
        )
    }
}