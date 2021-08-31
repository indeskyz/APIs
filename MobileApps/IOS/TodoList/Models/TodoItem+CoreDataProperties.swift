//
//  TodoItem+CoreDataProperties.swift
//  TodoList
//
//  Created by hazel on 2021-08-30.
//
//

import Foundation
import CoreData


extension TodoItem {

    @nonobjc public class func fetchRequest() -> NSFetchRequest<TodoItem> {
        return NSFetchRequest<TodoItem>(entityName: "TodoItem")
    }

    @NSManaged public var name: String?
    @NSManaged public var itemDesc: String?
    @NSManaged public var createdAt: Date?
    @NSManaged public var isComplete: Bool

}

extension TodoItem : Identifiable {

}
