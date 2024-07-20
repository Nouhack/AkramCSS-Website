import React from 'react'
import Buttons_component from '../../Components/ui_components_list/Buttons_component'
import Shadow_buttons_component from '../../Components/ui_components_list/Shadow_buttons_component'
import Buttons_color_transition_component from '../../Components/ui_components_list/Buttons_color_transition_component'
import Alert_component from '../../Components/ui_components_list/Alert_component'
import Card_component from '../../Components/ui_components_list/Card_component'
import Sign_in_component from '../../Components/ui_components_list/Sign_in_component'
import Badge_component from '../../Components/ui_components_list/Badge_component'
import Stacked_list_component from '../../Components/ui_components_list/Stacked_list_component'


export default function Components() {
  return (
    <div className="w-100-100 h-full page px-1 md:px-5 overflowY-auto overflowX-hidden">
            <Buttons_component/>
            <Shadow_buttons_component/>
            <Buttons_color_transition_component/>
            <Alert_component/>
            <Card_component/>
            <Sign_in_component/>
            <Badge_component/>
            <Stacked_list_component/>
    </div>
  )
}
