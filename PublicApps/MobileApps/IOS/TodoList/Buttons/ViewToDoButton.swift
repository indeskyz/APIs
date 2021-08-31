//
//  ViewToDoButton.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//

import UIKit

class ViewToDoButton: UIButton{
    override init(frame: CGRect){
        super.init(frame: frame)
        setupButton()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        setupButton()
    }
    
    func setupButton(){
        setTitleColor(.white, for: .normal)
        back
    }
}
