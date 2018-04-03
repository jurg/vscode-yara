"use strict";

import * as vscode from "vscode";

// provide completion for YARA modules
// will have to be static until I can figure out a better method
export const modules = {
    has: function (name: string) {
        let list: Set<string> = new Set(["pe", "elf", "cuckoo", "magic", "magic", "hash", "math", "dotnet", "time"]);
        return list.has(name);
    },
    get: function (name: string) {
        // a terrible method for providing these items
        // but i have no idea how to do this crap in (type|java)script properly
        let items: null | Array<string>;
        if (name == "pe") {
            return [
                ["machine", vscode.CompletionItemKind.Enum],
                ["MACHINE_UNKNOWN", vscode.CompletionItemKind.Enum],
                ["MACHINE_AM33", vscode.CompletionItemKind.Enum],
                ["MACHINE_AMD64", vscode.CompletionItemKind.Enum],
                ["MACHINE_ARM", vscode.CompletionItemKind.Enum],
                ["MACHINE_ARMNT", vscode.CompletionItemKind.Enum],
                ["MACHINE_ARM64", vscode.CompletionItemKind.Enum],
                ["MACHINE_EBC", vscode.CompletionItemKind.Enum],
                ["MACHINE_I386", vscode.CompletionItemKind.Enum],
                ["MACHINE_IA64", vscode.CompletionItemKind.Enum],
                ["MACHINE_M32R", vscode.CompletionItemKind.Enum],
                ["MACHINE_MIPS16", vscode.CompletionItemKind.Enum],
                ["MACHINE_MIPSFPU", vscode.CompletionItemKind.Enum],
                ["MACHINE_MIPSFPU16", vscode.CompletionItemKind.Enum],
                ["MACHINE_POWERPC", vscode.CompletionItemKind.Enum],
                ["MACHINE_POWERPCFPU", vscode.CompletionItemKind.Enum],
                ["MACHINE_R4000", vscode.CompletionItemKind.Enum],
                ["MACHINE_SH3", vscode.CompletionItemKind.Enum],
                ["MACHINE_SH3DSP", vscode.CompletionItemKind.Enum],
                ["MACHINE_SH4", vscode.CompletionItemKind.Enum],
                ["MACHINE_SH5", vscode.CompletionItemKind.Enum],
                ["MACHINE_THUMB", vscode.CompletionItemKind.Enum],
                ["MACHINE_WCEMIPSV2", vscode.CompletionItemKind.Enum],
                ["checksum", vscode.CompletionItemKind.Property],
                ["calculate_checksum", vscode.CompletionItemKind.Property],
                ["subsystem", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_UNKNOWN", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_NATIVE", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_WINDOWS_GUI", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_WINDOWS_CUI", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_OS2_CUI", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_POSIX_CUI", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_NATIVE_WINDOWS", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_WINDOWS_CE_GUI", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_EFI_APPLICATION", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_EFI_BOOT_SERVICE_DRIVER", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_EFI_RUNTIME_DRIVER", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_XBOX", vscode.CompletionItemKind.Enum],
                ["SUBSYSTEM_WINDOWS_BOOT_APPLICATIONS", vscode.CompletionItemKind.Enum],
                ["timestamp", vscode.CompletionItemKind.Property],
                ["entry_point", vscode.CompletionItemKind.Property],
                ["image_base", vscode.CompletionItemKind.Property],
                ["characteristics", vscode.CompletionItemKind.Enum],
                ["RELOCS_STRIPPED", vscode.CompletionItemKind.Enum],
                ["EXECUTABLE_IMAGE", vscode.CompletionItemKind.Enum],
                ["LINE_NUMS_STRIPPED", vscode.CompletionItemKind.Enum],
                ["LOCAL_SYMS_STRIPPED", vscode.CompletionItemKind.Enum],
                ["AGGRESIVE_WS_TRIM", vscode.CompletionItemKind.Enum],
                ["LARGE_ADDRESS_AWARE", vscode.CompletionItemKind.Enum],
                ["BYTES_REVERSED_LO", vscode.CompletionItemKind.Enum],
                ["MACHINE_32BIT", vscode.CompletionItemKind.Enum],
                ["DEBUG_STRIPPED", vscode.CompletionItemKind.Enum],
                ["REMOVABLE_RUN_FROM_SWAP", vscode.CompletionItemKind.Enum],
                ["NET_RUN_FROM_SWAP", vscode.CompletionItemKind.Enum],
                ["SYSTEM", vscode.CompletionItemKind.Enum],
                ["DLL", vscode.CompletionItemKind.Enum],
                ["UP_SYSTEM_ONLY", vscode.CompletionItemKind.Enum],
                ["BYTES_REVERSED_HI", vscode.CompletionItemKind.Enum],
                ["linker_version", vscode.CompletionItemKind.Class],
                ["os_version", vscode.CompletionItemKind.Class],
                ["image_version", vscode.CompletionItemKind.Class],
                ["subsystem_version", vscode.CompletionItemKind.Class],
                ["dll_characteristics", vscode.CompletionItemKind.Enum],
                ["number_of_sections", vscode.CompletionItemKind.Property],
                ["sections", vscode.CompletionItemKind.Class],
                ["overlay", vscode.CompletionItemKind.Class],
                ["offset", vscode.CompletionItemKind.Enum],
                ["size", vscode.CompletionItemKind.Enum],
                ["number_of_resources", vscode.CompletionItemKind.Property],
                ["resource_timestamp", vscode.CompletionItemKind.Property],
                ["resource_version", vscode.CompletionItemKind.Class],
                ["resources", vscode.CompletionItemKind.Class],
                ["version_info", vscode.CompletionItemKind.Class],
                ["number_of_signatures", vscode.CompletionItemKind.Property],
                ["signatures", vscode.CompletionItemKind.Class],
                ["rich_signature", vscode.CompletionItemKind.Class],
                ["exports", vscode.CompletionItemKind.Method],
                ["number_of_exports", vscode.CompletionItemKind.Property],
                ["number_of_imports", vscode.CompletionItemKind.Property],
                ["imports", vscode.CompletionItemKind.Method],
                ["locale", vscode.CompletionItemKind.Method],
                ["language", vscode.CompletionItemKind.Method],
                ["imphash", vscode.CompletionItemKind.Method],
                ["section_index", vscode.CompletionItemKind.Method],
                ["is_dll", vscode.CompletionItemKind.Method],
                ["is_32bit", vscode.CompletionItemKind.Method],
                ["is_64bit", vscode.CompletionItemKind.Method],
                ["rva_to_offset", vscode.CompletionItemKind.Method],
                // applies to linker_, os_, subsystem_, resource_, and image_version
                ["major", vscode.CompletionItemKind.Enum],
                ["minor", vscode.CompletionItemKind.Enum]
            ];
        }
        else if (name == "elf") {
            return [
                ["type", vscode.CompletionItemKind.Enum],
                ["ET_NONE", vscode.CompletionItemKind.Enum],
                ["ET_REL", vscode.CompletionItemKind.Enum],
                ["ET_EXEC", vscode.CompletionItemKind.Enum],
                ["ET_DYN", vscode.CompletionItemKind.Enum],
                ["ET_CORE", vscode.CompletionItemKind.Enum],
                ["machine", vscode.CompletionItemKind.Enum],
                ["EM_M32", vscode.CompletionItemKind.Enum],
                ["EM_SPARC", vscode.CompletionItemKind.Enum],
                ["EM_386", vscode.CompletionItemKind.Enum],
                ["EM_68K", vscode.CompletionItemKind.Enum],
                ["EM_88K", vscode.CompletionItemKind.Enum],
                ["EM_860", vscode.CompletionItemKind.Enum],
                ["EM_MIPS", vscode.CompletionItemKind.Enum],
                ["EM_MIPS_RS3_LE", vscode.CompletionItemKind.Enum],
                ["EM_PPC", vscode.CompletionItemKind.Enum],
                ["EM_PPC64", vscode.CompletionItemKind.Enum],
                ["EM_ARM", vscode.CompletionItemKind.Enum],
                ["EM_X86_64", vscode.CompletionItemKind.Enum],
                ["EM_AARCH64", vscode.CompletionItemKind.Enum],
                ["entry_point", vscode.CompletionItemKind.Property],
                ["number_of_sections", vscode.CompletionItemKind.Property],
                ["sections", vscode.CompletionItemKind.Class],
                ["number_of_segments", vscode.CompletionItemKind.Property],
                ["segments", vscode.CompletionItemKind.Class],
                ["dynamic_section_entries", vscode.CompletionItemKind.Property],
                ["dynamic", vscode.CompletionItemKind.Class],
                ["symtab_entries", vscode.CompletionItemKind.Property],
                ["symtab", vscode.CompletionItemKind.Class]
            ];
        }
        else if (name == "cuckoo") {
            return [
                ["network", vscode.CompletionItemKind.Class],
                ["registry", vscode.CompletionItemKind.Class],
                ["filesystem", vscode.CompletionItemKind.Class],
                ["sync", vscode.CompletionItemKind.Class]
            ];
        }
        else if (name == "magic") {
            return [
                ["type", vscode.CompletionItemKind.Method],
                ["mime_type", vscode.CompletionItemKind.Method]
            ];
        }
        else if (name == "hash") {
            return [
                ["md5", vscode.CompletionItemKind.Method],
                ["sha1", vscode.CompletionItemKind.Method],
                ["sha256", vscode.CompletionItemKind.Method],
                ["checksum32", vscode.CompletionItemKind.Method]
            ];
        }
        else if (name == "math") {
            return [
                ["entropy", vscode.CompletionItemKind.Method],
                ["monte_carlo_pi", vscode.CompletionItemKind.Method],
                ["serial_correlation", vscode.CompletionItemKind.Method],
                ["mean", vscode.CompletionItemKind.Method],
                ["deviation", vscode.CompletionItemKind.Method],
                ["in_range", vscode.CompletionItemKind.Method]
            ];
        }
        else if (name == "dotnet") {
            return [
                ["version", vscode.CompletionItemKind.Property],
                ["module_name", vscode.CompletionItemKind.Property],
                ["number_of_streams", vscode.CompletionItemKind.Property],
                ["streams", vscode.CompletionItemKind.Class],
                ["number_of_guids", vscode.CompletionItemKind.Property],
                ["guids", vscode.CompletionItemKind.Property],
                ["number_of_resources", vscode.CompletionItemKind.Property],
                ["resources", vscode.CompletionItemKind.Class],
                ["assembly", vscode.CompletionItemKind.Class],
                ["number_of_modulerefs", vscode.CompletionItemKind.Property],
                ["modulerefs", vscode.CompletionItemKind.Property],
                ["typelib", vscode.CompletionItemKind.Property],
                ["assembly_refs", vscode.CompletionItemKind.Class],
                ["number_of_user_strings", vscode.CompletionItemKind.Property],
                ["user_strings", vscode.CompletionItemKind.Property]
            ];
        }
        else if (name == "time") {
            return [
                ["now", vscode.CompletionItemKind.Method]
            ];
        }
        return null;
    }
};
