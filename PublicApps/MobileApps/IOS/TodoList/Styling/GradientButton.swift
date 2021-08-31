//
//  GradientButton.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//

import UIKit

class GradientButton: UIButton {
    
    let gradientButton = CAGradientLayer()
    
    init(colors: [CGColor], titleColor: UIColor, fontSize: CGFloat, radius: CGFloat,title: String, forTitle: UIControl.State ) {
        super.init(frame: .zero)
        layer.addSublayer(gradientButton)
        gradientButton.frame = bounds
        gradientButton.colors = colors
        setupButton(titleColor, fontSize, radius, title, forTitle)
        
    }
    required init?(coder: NSCoder){
        fatalError()
    }
    
    override func layoutSubviews() {
        super.layoutSubviews()
        gradientButton.frame = bounds
        
    }
    
    func setupButton(_ titleColor: UIColor, _ fontSize: CGFloat, _ radius: CGFloat, _ title: String, _ forTitle: UIControl.State){
        setTitleColor(titleColor, for: .normal)
        titleLabel?.font = UIFont(name: "System", size: fontSize)
        setTitle(title, for: forTitle)
        clipsToBounds = true
        translatesAutoresizingMaskIntoConstraints = false
        layer.cornerRadius = radius
       
       
        
        
    }
}
