import {PrimeReactContext} from 'primereact/api';
import {Button} from 'primereact/button';
import {InputSwitch} from 'primereact/inputswitch';
import {RadioButton} from 'primereact/radiobutton';
import {Sidebar} from 'primereact/sidebar';
import {classNames} from 'primereact/utils';
import React, {useContext, useEffect, useState} from 'react';
import {LayoutContext} from './context/layoutcontext';
import AppConfigButton from "@/Components/AppConfigButton.jsx";

const AppConfig = (props) => {
    const [scales] = useState([12, 13, 14, 15, 16]);
    const {layoutConfig, setLayoutConfig, layoutState, setLayoutState} = useContext(LayoutContext);
    const {setRipple, changeTheme} = useContext(PrimeReactContext);

    const onConfigButtonClick = () => {
        setLayoutState((prevState) => ({...prevState, configSidebarVisible: true}));
    };

    const onConfigSidebarHide = () => {
        setLayoutState((prevState) => ({...prevState, configSidebarVisible: false}));
    };

    const changeInputStyle = (e) => {
        setLayoutConfig((prevState) => ({...prevState, inputStyle: e.value}));
    };

    const changeRipple = (e) => {
        setRipple(e.value);
        setLayoutConfig((prevState) => ({...prevState, ripple: e.value}));
    };

    const changeMenuMode = (e) => {
        setLayoutConfig((prevState) => ({...prevState, menuMode: e.value}));
    };

    const _changeTheme = (theme, colorScheme) => {
        changeTheme?.(layoutConfig.theme, theme, 'theme-css', () => {
            setLayoutConfig((prevState) => ({...prevState, theme, colorScheme}));
        });
    };

    const decrementScale = () => {
        setLayoutConfig((prevState) => ({...prevState, scale: prevState.scale - 1}));
    };

    const incrementScale = () => {
        setLayoutConfig((prevState) => ({...prevState, scale: prevState.scale + 1}));
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    };

    useEffect(() => {
        applyScale();
    }, [layoutConfig.scale]);

    return (
        <>

            <button className="layout-config-button config-link" type="button" onClick={onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>


            <Sidebar visible={layoutState.configSidebarVisible} onHide={onConfigSidebarHide} position="right"
                     className="layout-config-sidebar w-20rem">
                {!props.simple && (
                    <>
                        <h5>Scale</h5>
                        <div className="flex align-items-center">
                            <Button icon="pi pi-minus" type="button" onClick={decrementScale} rounded text
                                    className="w-2rem h-2rem mr-2" disabled={layoutConfig.scale === scales[0]}></Button>
                            <div className="flex gap-2 align-items-center">
                                {scales.map((item) => {
                                    return <i className={classNames('pi pi-circle-fill', {
                                        'text-primary-500': item === layoutConfig.scale,
                                        'text-300': item !== layoutConfig.scale
                                    })} key={item}></i>;
                                })}
                            </div>
                            <Button icon="pi pi-plus" type="button" onClick={incrementScale} rounded text
                                    className="w-2rem h-2rem ml-2"
                                    disabled={layoutConfig.scale === scales[scales.length - 1]}></Button>
                        </div>

                        <h5>Menu Type</h5>
                        <div className="flex">
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="menuMode" value={'static'}
                                             checked={layoutConfig.menuMode === 'static'}
                                             onChange={(e) => changeMenuMode(e)} inputId="mode1"></RadioButton>
                                <label htmlFor="mode1">Static</label>
                            </div>
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="menuMode" value={'overlay'}
                                             checked={layoutConfig.menuMode === 'overlay'}
                                             onChange={(e) => changeMenuMode(e)} inputId="mode2"></RadioButton>
                                <label htmlFor="mode2">Overlay</label>
                            </div>
                        </div>

                        <h5>Input Style</h5>
                        <div className="flex">
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="inputStyle" value={'outlined'}
                                             checked={layoutConfig.inputStyle === 'outlined'}
                                             onChange={(e) => changeInputStyle(e)}
                                             inputId="outlined_input"></RadioButton>
                                <label htmlFor="outlined_input">Outlined</label>
                            </div>
                            <div className="field-radiobutton flex-1">
                                <RadioButton name="inputStyle" value={'filled'}
                                             checked={layoutConfig.inputStyle === 'filled'}
                                             onChange={(e) => changeInputStyle(e)} inputId="filled_input"></RadioButton>
                                <label htmlFor="filled_input">Filled</label>
                            </div>
                        </div>

                        <h5>Ripple Effect</h5>
                        <InputSwitch checked={layoutConfig.ripple} onChange={(e) => changeRipple(e)}></InputSwitch>
                    </>
                )}
                <h5>Bootstrap</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/bootstrap4-light-blue.svg"
                                     imgAlt="Bootstrap Light Blue"
                                     onClick={() => _changeTheme('bootstrap4-light-blue', 'light')}></AppConfigButton>
                    <AppConfigButton img="/images/layout/themes/bootstrap4-light-purple.svg"
                                     imgAlt="Bootstrap Light Purple"
                                     onClick={() => _changeTheme('bootstrap4-light-purple', 'light')}></AppConfigButton>
                    <AppConfigButton img="/images/layout/themes/bootstrap4-dark-blue.svg"
                                     imgAlt="Bootstrap Dark Blue"
                                     onClick={() => _changeTheme('bootstrap4-dark-blue', 'dark')}></AppConfigButton>
                    <AppConfigButton img="/images/layout/themes/bootstrap4-dark-purple.svg"
                                     imgAlt="Bootstrap Dark Purple"
                                     onClick={() => _changeTheme('bootstrap4-dark-purple', 'dark')}></AppConfigButton>
                </div>

                <h5>Material Design</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/md-light-indigo.svg"
                                     imgAlt="Material Light Indigo"
                                     onClick={() => _changeTheme('md-light-indigo', 'light')}></AppConfigButton>
                    <AppConfigButton img="/images/layout/themes/md-light-deeppurple.svg"
                                     imgAlt="Material Light DeepPurple"
                                     onClick={() => _changeTheme('md-light-deeppurple', 'light')}></AppConfigButton>
                    <AppConfigButton img="/images/layout/themes/md-dark-indigo.svg"
                                     imgAlt="Material Dark Indigo"
                                     onClick={() => _changeTheme('md-dark-indigo', 'dark')}></AppConfigButton>
                    <AppConfigButton img="/images/layout/themes/md-dark-deeppurple.svg"
                                     imgAlt="Material Dark DeepPurple"
                                     onClick={() => _changeTheme('md-dark-deeppurple', 'dark')}></AppConfigButton>
                </div>

                <h5>Material Design Compact</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/md-light-indigo.svg"
                                     imgAlt="Material Light Indigo"
                                     onClick={() => _changeTheme('mdc-light-indigo', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/md-light-deeppurple.svg"
                                     imgAlt="Material Light Deep Purple"
                                     onClick={() => _changeTheme('mdc-light-deeppurple', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/md-dark-indigo.svg"
                                     imgAlt="Material Dark Indigo"
                                     onClick={() => _changeTheme('mdc-dark-indigo', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/md-dark-deeppurple.svg"
                                     imgAlt="Material Dark Deep Purple"
                                     onClick={() => _changeTheme('mdc-dark-deeppurple', 'dark')}/>
                </div>

                <h5>Tailwind</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/tailwind-light.png"
                                     imgAlt="Tailwind Light"
                                     onClick={() => _changeTheme('tailwind-light', 'light')}/>
                </div>

                <h5>Fluent UI</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/fluent-light.png"
                                     imgAlt="Fluent Light"
                                     onClick={() => _changeTheme('fluent-light', 'light')}/>
                </div>

                <h5>PrimeOne Design - 2022</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/lara-light-indigo.png"
                                     imgAlt="Lara Light Indigo"
                                     onClick={() => _changeTheme('lara-light-indigo', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/lara-light-blue.png"
                                     imgAlt="Lara Light Blue"
                                     onClick={() => _changeTheme('lara-light-blue', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/lara-light-purple.png"
                                     imgAlt="Lara Light Purple"
                                     onClick={() => _changeTheme('lara-light-purple', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/lara-light-teal.png"
                                     imgAlt="Lara Light Teal"
                                     onClick={() => _changeTheme('lara-light-teal', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/lara-dark-indigo.png"
                                     imgAlt="Lara Dark Indigo"
                                     onClick={() => _changeTheme('lara-dark-indigo', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/lara-dark-blue.png"
                                     imgAlt="Lara Dark Blue"
                                     onClick={() => _changeTheme('lara-dark-blue', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/lara-dark-purple.png"
                                     imgAlt="Lara Dark Purple"
                                     onClick={() => _changeTheme('lara-dark-purple', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/lara-dark-teal.png"
                                     imgAlt="Lara Dark Teal"
                                     onClick={() => _changeTheme('lara-dark-teal', 'dark')}/>
                </div>

                <h5>PrimeOne Design - 2021</h5>
                <div className="grid">
                    <AppConfigButton img="/images/layout/themes/saga-blue.png"
                                     imgAlt="Saga Blue"
                                     onClick={() => _changeTheme('saga-blue', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/saga-green.png"
                                     imgAlt="Saga Green"
                                     onClick={() => _changeTheme('saga-green', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/saga-orange.png"
                                     imgAlt="Saga Orange"
                                     onClick={() => _changeTheme('saga-orange', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/saga-purple.png"
                                     imgAlt="Saga Purple"
                                     onClick={() => _changeTheme('saga-purple', 'light')}/>
                    <AppConfigButton img="/images/layout/themes/vela-blue.png"
                                     imgAlt="Vela Blue"
                                     onClick={() => _changeTheme('vela-blue', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/vela-green.png"
                                     imgAlt="Vela Green"
                                     onClick={() => _changeTheme('vela-green', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/vela-orange.png"
                                     imgAlt="Vela Orange"
                                     onClick={() => _changeTheme('vela-orange', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/vela-purple.png"
                                     imgAlt="Vela Purple"
                                     onClick={() => _changeTheme('vela-purple', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/arya-blue.png"
                                     imgAlt="Arya Blue"
                                     onClick={() => _changeTheme('arya-blue', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/arya-green.png"
                                     imgAlt="Arya Green"
                                     onClick={() => _changeTheme('arya-green', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/arya-orange.png"
                                     imgAlt="Arya Orange"
                                     onClick={() => _changeTheme('arya-orange', 'dark')}/>
                    <AppConfigButton img="/images/layout/themes/arya-purple.png"
                                     imgAlt="Arya Purple"
                                     onClick={() => _changeTheme('arya-purple', 'dark')}/>
                </div>
            </Sidebar>
        </>
    );
};

export default AppConfig;
