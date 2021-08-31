//
//  Colors.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//

import UIKit

class BackgroundGradient: UIViewController{
    
    func createGradientColor(_ hue: CGFloat, _ sat: CGFloat, _ brightness: CGFloat, _ alpha: CGFloat)-> CGColor{
        let gradient = UIColor.init(hue: hue, saturation: sat, brightness: brightness, alpha: alpha).cgColor
        return gradient
        }
    
    func addGradientToView(_ firstGradientColor: CGColor, _ secondGradientColor: CGColor) -> CALayer {
        let gradientLayer = CAGradientLayer()
        gradientLayer.frame = view.bounds
        gradientLayer.colors = [firstGradientColor, secondGradientColor]
        return gradientLayer
    }
}


