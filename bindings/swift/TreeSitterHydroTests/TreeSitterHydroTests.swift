import XCTest
import SwiftTreeSitter
import TreeSitterHydro

final class TreeSitterHydroTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_hydro())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Hydro grammar")
    }
}
