package tree_sitter_hydro_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_hydro "github.com/carsonetb/tree-sitter-hydro/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_hydro.Language())
	if language == nil {
		t.Errorf("Error loading Hydro grammar")
	}
}
